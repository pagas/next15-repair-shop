import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
    href?: string;
    label: string;
    icon: LucideIcon;
};

export function NavButton({ href, label, icon: Icon }: Props) {
    return (
        <Button variant="ghost" size="icon" aria-label={label} title={label} className="rounded-full" asChild >

            {href ? (
                <Link href={href}>
                    <Icon size={24} />
                </Link>
            ) : (
                <Icon size={24} />
            )}

        </Button>
    );
}