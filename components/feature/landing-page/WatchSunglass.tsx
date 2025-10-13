import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const WatchSunglass = async () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Accessories</h2>
            <div className="flex justify-between px-4">
                <Card className="w-1/2 md:w-1/3 max-w-xl mr-2 min-h-[30vh] md:min-h-[500px] relative shadow">
                    <Link passHref href="/collection?category=Watches">
                        <Image src="/images/watches.jpg" alt="Watches" fill className="w-full rounded-xl absolute inset-0 h-auto" />
                        <div className="p-4 bottom-0 z-10">
                            <h3 className="text-lg font-semibold text-white bottom-8 left-8 absolute">Watches</h3>
                        </div>
                        <div className="absolute bg-background/50 hover:opacity-40 inset-0 opacity-0" />
                    </Link>
                </Card>
                <Card className="w-1/2 md:w-1/3 max-w-xl ml-2 min-h-[30vh] md:min-h-[500px] relative rounded-xl shadow">
                    <Link passHref href="/collection?category=Sunglass">
                        <Image src="/images/sunglasses.jpg" alt="Sunglasses" fill className="w-full rounded-xl absolute inset-0 h-auto" />
                        <div className="p-4 bottom-0 z-10">
                            <h3 className="text-lg font-semibold text-white bottom-8 left-8 absolute">Sunglass</h3>
                        </div>
                        <div className="absolute bg-background/50 hover:opacity-40 inset-0 opacity-0" />
                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default WatchSunglass;
