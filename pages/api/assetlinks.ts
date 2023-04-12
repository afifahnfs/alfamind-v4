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
        "0A:C0:66:FB:61:07:0A:72:84:D3:05:46:92:83:61:10:81:B0:19:A1:04:59:D8:CE:F8:09:6C:0C:E9:07:CA:E7",
      ],
    },
  });
}
