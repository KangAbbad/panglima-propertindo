import Image from "next/image";
import Link from "next/link";

import logoImage from "@/assets/images/panglima-propertindo-main-logo.png";

export function PrimaryLogo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src={logoImage}
        alt="Panglima Propertindo"
        width={156}
        height={70}
        priority
      />
    </Link>
  );
}
