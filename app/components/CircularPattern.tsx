import { useMemo } from 'react';

const MOST_OPAQUE = 0.7;
const LEAST_OPAQUE = 0.05;
const BASE_COLOR = '#6b7280'; // gray-500
const INITIAL_RADIUS = 200;
const ROTATION_DURATION = 4 * 60; // seconds for one full rotation

interface CircularPatternProps {
    symbols?: string[];
    baseRadius?: number;
    radiusIncrement?: number;
    symbolsPerCircle?: number;
    className?: string;
}

export function CircularPattern({
    symbols = ['{', '}', '<', '>', '/', '*', '+', '='],
    baseRadius = INITIAL_RADIUS,
    radiusIncrement = 50,
    symbolsPerCircle = 24,
    className
}: CircularPatternProps) {
    const circles = useMemo(() => {
        return symbols.map((symbol, circleIndex) => {
            const radius = baseRadius + circleIndex * radiusIncrement;
            const symbolCount = Math.floor(symbolsPerCircle + circleIndex * 4); // More symbols on outer circles

            const symbolsOnCircle = Array.from(
                { length: symbolCount },
                (_, i) => {
                    const angle = (i / symbolCount) * Math.PI * 2;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const rotation = (angle * 180) / Math.PI + 90; // +90 to orient along circle tangent

                    return {
                        id: `${circleIndex}-${i}`,
                        x,
                        y,
                        rotation,
                        delay: Math.random() * 3
                    };
                }
            );

            return {
                symbol,
                radius,
                symbols: symbolsOnCircle
            };
        });
    }, [symbols, baseRadius, radiusIncrement, symbolsPerCircle]);

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div
                    className="relative animate-spin"
                    style={{
                        animationDuration: `${ROTATION_DURATION}s`
                    }}
                >
                    {circles.map((circle, circleIndex) =>
                        circle.symbols.map((symbolData) => (
                            <div
                                key={symbolData.id}
                                className="absolute left-1/2 top-1/2 font-mono select-none animate-pulse"
                                style={{
                                    transform: `translate(-50%, -50%) translate(${symbolData.x}px, ${symbolData.y}px) rotate(${symbolData.rotation}deg)`,
                                    fontSize: `${14 + circleIndex * 2}px`,
                                    color: BASE_COLOR,
                                    opacity:
                                        MOST_OPAQUE -
                                        (circleIndex / (symbols.length - 1)) *
                                            (MOST_OPAQUE - LEAST_OPAQUE),
                                    animationDelay: `${symbolData.delay}s`,
                                    animationDuration: '3s'
                                }}
                            >
                                {circle.symbol}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
