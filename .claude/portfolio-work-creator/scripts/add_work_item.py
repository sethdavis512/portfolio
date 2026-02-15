#!/usr/bin/env python3
"""
Add a new work item to the portfolio.

This script automates adding a work item across all required files:
- Creates or updates route file in web/app/routes/
- Updates web/app/routes.ts
- Updates web/app/components/CommandPalette.tsx
- Updates web/app/routes/sitemap.xml.tsx
- Optionally updates web/react-router.config.ts for prerendering
"""

import os
import sys
import re
from pathlib import Path
from typing import Optional


def find_portfolio_root() -> Path:
    """Find the portfolio repository root."""
    current = Path.cwd()
    
    # Check if we're already in the portfolio directory
    if (current / "web" / "app" / "routes.ts").exists():
        return current
    
    # Check parent directories
    for parent in current.parents:
        if (parent / "web" / "app" / "routes.ts").exists():
            return parent
    
    raise FileNotFoundError(
        "Could not find portfolio root. Run this script from within the portfolio repository."
    )


def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')


def add_route_definition(routes_file: Path, slug: str, route_file: str) -> None:
    """Add route definition to routes.ts."""
    content = routes_file.read_text()
    
    # Check if route already exists
    if f"route('{slug}'" in content:
        print(f"⚠️  Route '{slug}' already exists in routes.ts")
        return
    
    # Find the last route before the closing bracket
    # Insert alphabetically within the layout routes
    layout_match = re.search(r"layout\('routes/wrapper\.tsx', \[(.*?)\]\)", content, re.DOTALL)
    if not layout_match:
        raise ValueError("Could not find layout section in routes.ts")
    
    layout_content = layout_match.group(1)
    
    # Find insertion point (after last route() call, before closing bracket)
    lines = layout_content.split('\n')
    
    # Find the best insertion point (alphabetically or at the end)
    new_route = f"        route('{slug}', 'routes/{route_file}'),"
    
    # Simple approach: add before 'work' route if it exists, otherwise at the end
    insert_index = -1
    for i, line in enumerate(lines):
        if "route('work'" in line:
            insert_index = i
            break
    
    if insert_index == -1:
        # Add before the last line (which should be empty or a comment)
        insert_index = len(lines) - 1
    
    lines.insert(insert_index, new_route)
    
    # Reconstruct content
    new_layout_content = '\n'.join(lines)
    new_content = content.replace(layout_content, new_layout_content)
    
    routes_file.write_text(new_content)
    print(f"✅ Added route definition to routes.ts")


def add_command_palette_link(palette_file: Path, slug: str, title: str) -> None:
    """Add link to CommandPalette workLinks array."""
    content = palette_file.read_text()
    
    # Check if link already exists
    if f"to: '/{slug}'" in content:
        print(f"⚠️  Link '/{slug}' already exists in CommandPalette.tsx")
        return
    
    # Find the workLinks array
    work_links_match = re.search(r'const workLinks = \[(.*?)\];', content, re.DOTALL)
    if not work_links_match:
        raise ValueError("Could not find workLinks array in CommandPalette.tsx")
    
    work_links_content = work_links_match.group(1)
    
    # Create new link entry
    new_link = f"""    {{
        to: '/{slug}',
        icon: LinkIcon,
        label: '{title}'
    }},"""
    
    # Find insertion point (before the last closing brace)
    lines = work_links_content.split('\n')
    
    # Insert before the last item
    insert_index = len(lines) - 1
    lines.insert(insert_index, new_link)
    
    new_work_links = '\n'.join(lines)
    new_content = content.replace(work_links_content, new_work_links)
    
    palette_file.write_text(new_content)
    print(f"✅ Added link to CommandPalette.tsx")


def add_sitemap_entry(sitemap_file: Path, slug: str) -> None:
    """Add URL to sitemap.xml.tsx staticRoutes."""
    content = sitemap_file.read_text()
    
    # Check if URL already exists
    if f"url: '/{slug}'" in content:
        print(f"⚠️  URL '/{slug}' already exists in sitemap.xml.tsx")
        return
    
    # Find the staticRoutes array
    static_routes_match = re.search(
        r'const staticRoutes: SitemapRoute\[\] = \[(.*?)\];',
        content,
        re.DOTALL
    )
    if not static_routes_match:
        raise ValueError("Could not find staticRoutes in sitemap.xml.tsx")
    
    static_routes_content = static_routes_match.group(1)
    
    # Create new route entry (add to product pages section)
    new_route = f"""        {{ url: '/{slug}', changefreq: 'monthly', priority: 0.9 }},"""
    
    # Find the "Product pages" comment section
    lines = static_routes_content.split('\n')
    
    # Find insertion point after "// Product pages" comment
    insert_index = -1
    for i, line in enumerate(lines):
        if '// Product pages' in line:
            # Find the next line after the last product page
            for j in range(i + 1, len(lines)):
                if lines[j].strip().startswith('//') or lines[j].strip() == '':
                    insert_index = j
                    break
            break
    
    if insert_index == -1:
        # Fallback: add before "// Guide pages" or at the end
        for i, line in enumerate(lines):
            if '// Guide pages' in line or '// Project pages' in line:
                insert_index = i
                break
        
        if insert_index == -1:
            insert_index = len(lines) - 1
    
    lines.insert(insert_index, new_route)
    
    new_static_routes = '\n'.join(lines)
    new_content = content.replace(static_routes_content, new_static_routes)
    
    sitemap_file.write_text(new_content)
    print(f"✅ Added entry to sitemap.xml.tsx")


def add_prerender_route(config_file: Path, slug: str) -> None:
    """Add route to react-router.config.ts prerender array."""
    content = config_file.read_text()
    
    # Check if route already exists
    if f"'/{slug}'" in content:
        print(f"⚠️  Route '/{slug}' already exists in prerender config")
        return
    
    # Find the prerender array
    prerender_match = re.search(r'return \[(.*?)\];', content, re.DOTALL)
    if not prerender_match:
        raise ValueError("Could not find prerender array in react-router.config.ts")
    
    prerender_content = prerender_match.group(1)
    
    # Add new route (alphabetically)
    new_route = f"            '/{slug}',"
    
    lines = prerender_content.split('\n')
    
    # Simple insertion at the end before sitemap.xml
    insert_index = -1
    for i, line in enumerate(lines):
        if "'sitemap.xml'" in line or "'/sitemap.xml'" in line:
            insert_index = i
            break
    
    if insert_index == -1:
        insert_index = len(lines) - 1
    
    lines.insert(insert_index, new_route)
    
    new_prerender = '\n'.join(lines)
    new_content = content.replace(prerender_content, new_prerender)
    
    config_file.write_text(new_content)
    print(f"✅ Added route to prerender config")


def main():
    """Main execution."""
    if len(sys.argv) < 2:
        print("Usage: python add_work_item.py <slug> [--title 'Work Title'] [--no-prerender]")
        print("\nExample:")
        print("  python add_work_item.py my-awesome-project --title 'My Awesome Project'")
        print("  python add_work_item.py another-project --no-prerender")
        sys.exit(1)
    
    slug = sys.argv[1]
    
    # Parse optional arguments
    title = None
    prerender = True
    
    i = 2
    while i < len(sys.argv):
        if sys.argv[i] == '--title' and i + 1 < len(sys.argv):
            title = sys.argv[i + 1]
            i += 2
        elif sys.argv[i] == '--no-prerender':
            prerender = False
            i += 1
        else:
            i += 1
    
    # Use slug as title if not provided
    if title is None:
        # Convert slug to title case
        title = slug.replace('-', ' ').title()
    
    route_file = f"{slug}.tsx"
    
    try:
        root = find_portfolio_root()
        print(f"📁 Portfolio root: {root}")
        
        # File paths
        routes_file = root / "web" / "app" / "routes.ts"
        palette_file = root / "web" / "app" / "components" / "CommandPalette.tsx"
        sitemap_file = root / "web" / "app" / "routes" / "sitemap.xml.tsx"
        config_file = root / "web" / "react-router.config.ts"
        
        # Update files
        print(f"\n🔧 Adding work item: {title} ({slug})")
        print("=" * 60)
        
        add_route_definition(routes_file, slug, route_file)
        add_command_palette_link(palette_file, slug, title)
        add_sitemap_entry(sitemap_file, slug)
        
        if prerender:
            add_prerender_route(config_file, slug)
        else:
            print("⏭️  Skipped prerender config (--no-prerender)")
        
        print("=" * 60)
        print(f"\n✅ Work item '{title}' added successfully!")
        print(f"\n📝 Next steps:")
        print(f"   1. Create route file: web/app/routes/{route_file}")
        print(f"   2. Add images: web/public/{slug}-hero.webp and {slug}-thumbnail.webp")
        print(f"   3. Optionally add to /work page workItems array")
        
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
