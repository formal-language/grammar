import _generate from './_generate' ;

export default function generate ( { root , start , productions } ) {
	const startRule = productions.get(root).get(start) ;
	return _generate(productions, startRule) ;
}
