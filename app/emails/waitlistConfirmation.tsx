import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Img
} from 'react-email'
import * as React from "react";


export function WaitlistConfirmationEmail() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Nunito:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Preview>You're on the list.</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={accentBar} />
                    <Section style={content}>
                        <Section>
                            <Img src="/full-logo.png" alt="Exameow" width='30%' height="30%" />
                        </Section>
                        <Text style={eyebrow}>Early Access</Text>
                        <Heading style={heading}>You're on the list.</Heading>
                        <Text style={paragraph}>
                            Exameow is taking shape, quietly behind the curtains. Because good things take time.
                        </Text>
                        <Text style={paragraph}>
                            You're going to be one of the first to know when we open our doors.
                            In the meantime, you can follow us on <span style={{ fontWeight: 'bold' }}>Instagram</span> and <span style={{ fontWeight: 'bold' }}>LinkedIn</span> for updates,
                            or just sit tight and wait for our email.
                        </Text>
                        <Text style={{ ...paragraph, fontStyle: 'italic' }}>Excited for being one of our firsts?</Text>
                        <Hr style={divider} />
                        <Text style={watchText}>Watch this space</Text>
                    </Section>
                    <Section style={footer}>
                        <Text style={footerText}>— The Exameow Team</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

export default WaitlistConfirmationEmail;

const main = {
    backgroundColor: "#fcfcfc",
    fontFamily: "'Poppins', 'Nunito','Mulish', sans-serif",
    padding: "40px 0",
};

const container = {
    backgroundColor: "#fffbf1",
    border: "1px solid #e8e5df",
    borderRadius: "12px",
    overflow: "hidden",
    width: "480px",
    margin: "0 auto",
};

const accentBar = {
    height: "3px",
    background: "linear-gradient(90deg, #41205A, #F2C063)",
};

const content = {
    padding: "48px 40px 32px 40px",
};

const eyebrow = {
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase" as const,
    color: "#7c7c8a",
    fontWeight: 600,
    margin: "0 0 24px 0",
};

const heading = {
    fontSize: "26px",
    lineHeight: 1.3,
    color: "#1a1a1a",
    fontWeight: 600,
    margin: "0 0 24px 0",
};

const paragraph = {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#6b5c73",
    margin: "0 0 20px 0",
};

const divider = {
    borderColor: "#e8dcc0",
    margin: "12px 0 24px 0",
};

const watchText = {
    fontSize: "13px",
    letterSpacing: "1px",
    color: "#F2C063",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    margin: 0,
    textAlign: "center" as const,
};

const footer = {
    padding: "24px 40px",
    backgroundColor: "#41205A",
    borderTop: "1px solid #1c1c1c",
};

const footerText = {
    fontSize: "12px",
    color: "#fcfcfc",
    textAlign: "center" as const,
    margin: 0,
};