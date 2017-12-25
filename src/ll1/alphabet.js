import EW from './EW' ;

export default function alphabet ( grammar ) {

	const abc = new Set();

	for (const unit of grammar) {
		for (const rule of unit) {
			if (rule.length === 0) {
				abc.add(EW);
				continue;
			}
			for (const part of rule) {
				if (typeof part === 'string') abc.add(part);
			}
		}
	}

	return abc;

}
