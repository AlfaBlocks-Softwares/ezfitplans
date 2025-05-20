import { communityprofile } from "@/assets";
import { Button } from "@/design-system";
import Image from "next/image";
import Link from "next/link";

export default function JoinCommunityPage() {
  return (
    <main className="bg-primary rounded-[12px] border-1 border-muted p-[12px] w-full h-[88dvh] flex flex-col justify-center items-center mt-3 gap-10">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Image
          src={communityprofile}
          alt="profiel"
          className="w-[250px] h-[250px] object-cover"
        />
        <p className="font-poppins text-sm text-black text-center">
          Start a Discussion & Connect Today!
        </p>
      </div>
      <Link href={"/client/community/"}>
        <Button>Join Community</Button>
      </Link>
    </main>
  );
}
