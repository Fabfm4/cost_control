
import { useEffect, useState } from "react";
import { useUserRead } from "@/hooks/User";
import { useRouter } from "next/router";
import Link from 'next/link';


const LinkRedirect: React.FC<{path: string}> = ({path}) => {
    const router = useRouter();

    useEffect(() => {
        router.push(path)
    }, []);
    return null;
};

export default LinkRedirect;