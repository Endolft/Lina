import { NextRequest, NextResponse } from "next/server";
import { CONTRACT_ADDRESS, INTEGRATION_ABI } from "@/constants/SimpleBankABI";
import { ethers } from "ethers";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { args } = body;
    const provider = new ethers.JsonRpcProvider(process.env.RPC_PROVIDER);
    console.log("process.env.RPC_PROVIDER)", process.env.RPC_PROVIDER);
    console.log("provider", provider);
    const wallet = new ethers.Wallet("0x" + process.env.PRIVATE_KEY, provider);
    console.log("process.env.PRIVATE_KEY", process.env.PRIVATE_KEY);
    console.log("wallet", wallet);
    const integrationContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      INTEGRATION_ABI,
      wallet
    );
    const tx = await integrationContract.updateStatus(...args);
    const receipt = await tx.wait();
    return NextResponse.json({ ok: true, receipt });
  } catch (error) {
    console.error("Error al instanciar el contrato:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
