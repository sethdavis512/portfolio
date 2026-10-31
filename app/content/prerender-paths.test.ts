import { describe, expect, it } from 'vitest';
import { decks, tils, works } from '~/content';
import { contentPaths } from './prerender-paths';

// Runs over the real app/content files: both adapters must agree on what is published.
describe('contentPaths', () => {
    it('matches the paths the app collections publish', () => {
        const appPaths = [...works.paths(), ...tils.paths(), ...decks.paths()];
        expect([...contentPaths()].sort()).toEqual([...appPaths].sort());
    });

    it('never includes a draft', () => {
        const draftTils = Object.entries(
            import.meta.glob<string>('./til/*.mdx', { eager: true, query: '?raw', import: 'default' })
        )
            .filter(([, source]) => /^status:\s*["']?DRAFT/m.test(source))
            .map(([path]) => path.replace('./til/', '/til/').replace('.mdx', ''));
        expect(draftTils.length).toBeGreaterThan(0);
        for (const path of draftTils) {
            expect(contentPaths()).not.toContain(path);
        }
    });
});
