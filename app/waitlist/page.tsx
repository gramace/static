import { render } from "react-email";
import WaitlistConfirmationEmail from "../emails/waitlistConfirmation";


export default async function WaitlistPreviewPage() {
    const html = await render(<WaitlistConfirmationEmail />);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Waitlist Email Preview</h1>
            <iframe
                srcDoc={html}
                style={{
                    width: "100%",
                    height: "800px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                }}
                title="Waitlist Email Preview"
            />
        </div>
    );
}