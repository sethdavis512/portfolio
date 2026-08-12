import { cx } from '~/cva.config';

interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    as?: 'input' | 'textarea';
    rows?: number;
}

export function FormField({
    label,
    name,
    type = 'text',
    placeholder,
    required,
    error,
    as = 'input',
    rows
}: FormFieldProps) {
    const errorId = `${name}-error`;
    const inputClasses = cx(
        'p-3 rounded-lg border w-full bg-transparent transition-colors duration-150',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-zinc-950',
        error
            ? 'border-tertiary-500 focus:ring-tertiary-500'
            : 'border-zinc-300 dark:border-zinc-700 focus:ring-primary-500 dark:focus:ring-primary-400'
    );

    return (
        <div>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium"
            >
                {label}
            </label>
            {as === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    required={required}
                    rows={rows}
                    className={inputClasses}
                    placeholder={placeholder}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    required={required}
                    className={inputClasses}
                    placeholder={placeholder}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                />
            )}
            {error && (
                <p id={errorId} className="mt-1 text-sm text-tertiary-600 dark:text-tertiary-400">{error}</p>
            )}
        </div>
    );
}
