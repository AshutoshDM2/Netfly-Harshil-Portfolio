import { generateMetadata } from "@/constants/MetaData";
import PrivacyPolicy from "@/modules/privacy/privacy";
import { Suspense } from "react";

export const metadata = generateMetadata("Privacy Policy", "/privacy");

const PrivacyPage = () => {
  return (
    <Suspense>
      <PrivacyPolicy />
    </Suspense>
  );
};

export default PrivacyPage;
