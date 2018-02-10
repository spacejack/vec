let epsilon = 0.000001

export function getEpsilon (e: number): number {
	return epsilon
}

export function setEpsilon (e: number): void {
	epsilon = e
}

export function equalish (a: number, b: number): boolean {
	return Math.abs(a - b) <= epsilon * Math.max(1, Math.abs(a), Math.abs(b))
}
