import { generateAvailableDictionaryUsername, generateAvailableUsername } from '@wasp/core/auth.js'

export async function getUserFields(_context, args) {
  const username = await generateAvailableDictionaryUsername()
  const displayName = await generateAvailableUsername(args.profile.displayName.split(' '), { separator: '.' })
  return { username, displayName }
}


export function config() {
  const clientID = process.env['GOOGLE_CLIENT_ID']
  const clientSecret = process.env['GOOGLE_CLIENT_SECRET']

  if (!clientID) {
    throw new Error("Missing GOOGLE_CLIENT_ID environment variable.")
  }

  if (!clientSecret) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET environment variable.")
  }

  return { clientID, clientSecret, scope: ['profile'] }
  }

