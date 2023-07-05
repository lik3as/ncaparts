import { NextRequest, NextResponse } from "next/server";

function tempo(request, response) {
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toDateString()
  });
}