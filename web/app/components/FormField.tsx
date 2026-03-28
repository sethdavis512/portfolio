import { cx } from 'cva.config';

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
    const inputClasses = cx(
        'p-2 border rounded w-full',
        error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-zinc-500 focus:ring-primary-500'
    );

    return (
        <div>
            <label htmlFor={name} className="block mb-2 font-medium">
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
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    required={required}
                    className={inputClasses}
                    placeholder={placeholder}
                />
            )}
            {error && (
                <p className="mt-1 text-sm text-red-400">{error}</p>
            )}
        </div>
    );
}
