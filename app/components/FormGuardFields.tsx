interface FormGuardFieldsProps {
    token: string;
}

/**
 * Hidden inputs the spam guard reads on the server. The "website" field is a
 * honeypot: it is moved off-screen (not display:none, which some bots detect)
 * and excluded from tab order and the accessibility tree, so only automated
 * form-fillers ever populate it.
 */
export function FormGuardFields({ token }: FormGuardFieldsProps) {
    return (
        <>
            <input type="hidden" name="formToken" value={token} />
            <div
                className="absolute -left-[9999px] w-px h-px overflow-hidden"
                aria-hidden="true"
            >
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
        </>
    );
}
