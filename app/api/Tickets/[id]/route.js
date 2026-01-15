import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}){
    try {
        return NextResponse.json({message: "Ticket Deleted"}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status:500})
    }
}
