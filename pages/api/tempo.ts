import { NextRequest, NextResponse } from "next/server";

export default function tempo(request, response) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const subscribersRes = apiSecret;

  response.json({
    yourVariable: subscribersRes
  });
}