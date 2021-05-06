
export class Logger {
	
	static Log( ...args: any ): void {
		console.log('[TSPAQ] ', ...args);
	}

	static Add(x: number, y: number): number {
		return x + y;
	}
}
