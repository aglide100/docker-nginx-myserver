import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
    value: boolean;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json([
        {
            name: "service 1",
            value: false,
        },
        {
            name: "service 2",
            value: false,
        },
        {
            name: "service 3",
            value: false,
        },
        {
            name: "service 4",
            value: false,
        },
    ]);
}
