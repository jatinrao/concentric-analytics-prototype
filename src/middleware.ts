import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import jwt from 'jsonwebtoken';

// const SECRET_KEY = 'random_key';

// function isTokenValid(authHeader:string):boolean{
//   const token = authHeader.split(' ')[1];
//     try {
//       const decoded = jwt.verify(token, SECRET_KEY);
//       console.log('verify token debug-middleware',decoded);
//       return true;
//     } catch (err) { 
//         console.log('err',err)
//       return false;
//     }
// };

export function middleware(req: NextRequest) {
console.log('middleware called');
  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
   
     return NextResponse.json(
      { success: false, message: 'authentication failed' },
      { status: 401 }
    )

  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/users',
}