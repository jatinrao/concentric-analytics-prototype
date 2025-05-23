import { NextRequest, NextResponse } from 'next/server';
import { users } from '../../../data/users';
import jwt from 'jsonwebtoken';
import { User } from '@/data/users';

const SECRET_KEY = 'random_key';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = users.find((u:User) => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
    return NextResponse.json({ success: true, token, user: { name: user.name } });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}