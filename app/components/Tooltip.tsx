import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
}

export function Tooltip({ children, content, side = 'top' }: TooltipProps) {
    return (
        <TooltipPrimitive.Provider delayDuration={100}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger tabIndex={-1}>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side={side}
                        className="z-50 bg-black px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-white border-2 border-white"
                        sideOffset={4}
                    >
                        {content}
                        <TooltipPrimitive.Arrow className="fill-black" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}
