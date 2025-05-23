import { NextRequest, NextResponse } from 'next/server';
import { users } from '../../../data/users';
import jwt, { JwtPayload } from 'jsonwebtoken';

async function verifyToken(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, "random_key");
      return decoded;
    } catch {
      return null; 
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
 const decoded = await verifyToken(req);
  const { tenant } = await req.json();
  console.log("reached GET endpoint",decoded);
  if (decoded) {
    const user = users.find(u => u.id === (decoded as JwtPayload).userId);
    if(tenant !== user?.tenant){
      return NextResponse.json({ success: false, message: 'Forbidden',code:403 }, { status: 403 });
    }
    console.log(user,decoded);
    if (user) {
      return NextResponse.json({ success: true,code:200, user: { name: user.name,tenantId:user.tenant } });
    }
  }

  return NextResponse.json({ success: false, message: 'Unauthorized',code:401 }, { status: 401 });
}