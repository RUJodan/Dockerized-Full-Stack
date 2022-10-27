import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID);

export async function verify(token: string) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_OAUTH_CLIENT_ID,
  });

  return {
    payload: ticket.getPayload(),
    attributes: ticket.getAttributes(),
    envelope: ticket.getEnvelope(),
    userId: ticket.getUserId(),
  };
}