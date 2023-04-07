import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res.status(200).json({
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "id.meteor.alfamind_dev",
      sha256_cert_fingerprints: [
        "2B:13:4E:18:2E:4F:E6:46:75:9B:3F:75:BB:BE:28:B2:A4:F2:90:C9:D2:22:34:CF:0B:58:4B:E8:EB:3A:5B:25",
      ],
    },
  });
}
