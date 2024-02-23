import { dataset, projectId, token, versionApi } from "@/env";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { mutations } = await req.json();

  try {
    await fetch(
      `https://${projectId}.api.sanity.io/${versionApi}/data/mutate/${dataset}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mutations }),
      }
    );
    return NextResponse.json({
      data: {
        message: "Products updated successfully",
      },
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      data: {
        message: "Error updating products",
      },
      status: 400,
    });
  }
}
