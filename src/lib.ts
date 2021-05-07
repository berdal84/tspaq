
/**
 * A namespace with some functions...
 */
export namespace Lib {
	
	/**
	 * Log with a nice prefix
	 * @param args 
	 */
	export function log( ...args: any ): void {
		console.log('  [ TSPAQ ] says: ', ...args);
	}

	/**
	 * Add two numbers and return the result
	 * @param x 
	 * @param y 
	 * @returns 
	 */
	export function add(x: number, y: number): number {
		return x + y;
	}
}
