import { Iterate } from "@/components/utility";
import { PROFILE_LINKS } from "@/constant";
import { Code } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/">
          <Code className="mx-2 w-12 h-8" />
        </Link>
      </div>

      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <Iterate
          items={PROFILE_LINKS}
          render={(item, idx) => (
            <a key={idx} href={item.url} target="_blank">
              <item.svg className="text-2xl" />
            </a>
          )}
        />
      </div>
    </nav>
  );
}
