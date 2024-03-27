export class NoValidPlayersError extends Error {
  readonly message = 'NO VALID USERS DETECTED. Please make sure players\'s names are separated by spaces';
}