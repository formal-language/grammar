import EW from './EW.js';

export default function alphabet(productions) {
	const abc = new Set();

	for (const unit of productions.values()) {
		for (const rule of unit.values()) {
			if (rule.length === 0) abc.add(EW);
			else
				for (const part of rule)
					if (part.type === 'leaf') abc.add(part.terminal);
		}
	}

	return abc;
}
