import { Body, Container, Head, Heading, Html, Img, Section, Tailwind, Text } from "@react-email/components";
import { render } from "@react-email/render";
const DepositEmail = ({ userName }) => {
    return ( 
    <div>
      <Head />
      <Tailwind>
        <Body className="bg-gray-50 mx-auto my-auto font-sans">
          <Container className="bg-white mx-auto my-[40px] max-w-[600px] rounded-lg border border-solid border-[#e1e5e9] p-[32px] shadow-sm">
            {/* Header Section */}
            <Section className="text-center">
              <Img src={`https://newyolk.io/android-chrome-512x512.png`} width="80" height="80" alt="New Yolk Logo" className="my-0 mx-auto rounded-lg"/>
              <Heading className="mx-0 p-0 font-bold my-[24px] text-center text-[28px] text-[#1a1a1a]">Deposit Contract</Heading>
            </Section>

            {/* Welcome Message */}
            <Section className="mb-[24px]">
              <Text className="mb-[16px] text-[16px] leading-[26px] text-[#333333]">Dear {userName},</Text>
              <Text className="mb-[16px] text-[16px] leading-[26px] text-[#333333]">
                Thank you for choosing New Yolk for your investment needs. We are pleased to confirm that your deposit has been successfully processed and your
                contract has been generated.
              </Text>
              <Text className="font-medium mb-[16px] text-[16px] leading-[26px] text-[#333333]">
                Your deposit contract is now ready and attached to this email as a PDF document.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center">
              <Text className="mb-[8px] text-[12px] leading-[20px] text-[#888888]">This email was sent regarding your deposit contract</Text>
              <Text className="mb-[8px] text-[12px] leading-[20px] text-[#888888]">New Yolk Investment Solutions | Baghdad, Iraq</Text>
              <Text className="text-[12px] leading-[20px] text-[#888888]">© 2025 New Yolk. All rights reserved.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </div>);
};
const getDepositEmailHtml = async ({ userName }) => {
    return await render(DepositEmail({ userName: userName }));
};
export { DepositEmail, getDepositEmailHtml };
