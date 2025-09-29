import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Type for your form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
  createdAt?: Date;
}

export async function POST(request: Request) {
  const formData: ContactFormData = await request.json();
  formData.createdAt = new Date();

  // Validate the data
  if (!formData.name || !formData.email || !formData.message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MongoDB URI is missing");
    return NextResponse.json(
      { error: "Database connection failed - no URI" },
      { status: 500 }
    );
  }

  let client;
  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(process.env.MONGODB_DATABASE);
    const collection = db.collection(
      process.env.MONGODB_COLLECTION || "Contact_Form"
    );

    const result = await collection.insertOne(formData);

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database error details:", error);
    return NextResponse.json(
      {
        error: "Failed to save contact form",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
