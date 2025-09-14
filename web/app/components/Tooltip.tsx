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
                <TooltipPrimitive.Trigger>{children}</TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side={side}
                        className="z-50 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm text-zinc-50 shadow-lg border border-zinc-700"
                        sideOffset={4}
                    >
                        {content}
                        <TooltipPrimitive.Arrow className="fill-zinc-900" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}
