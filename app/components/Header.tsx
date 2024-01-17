import { ArrowLeft } from 'lucide-react';
import ContentContainer from './ContentContainer';
import Logo from './Logo';
import { Link, useLocation } from '@remix-run/react';

export default function Header() {
    const location = useLocation();

    const isHome = location.pathname === '/';

    return (
        <div className="bg-[url('https://res.cloudinary.com/setholito/image/upload/v1486354320/portfolio/geometry-hero.jpg')] text-white">
            <ContentContainer>
                <div className="flex items-center">
                    <div className="w-12 h-12">
                        <Logo fill="#fff" />
                    </div>
                    {!isHome && (
                        <div>
                            <Link to="/" className="flex">
                                <ArrowLeft />
                                <div>Back</div>
                            </Link>
                        </div>
                    )}
                </div>
            </ContentContainer>
        </div>
    );
}
