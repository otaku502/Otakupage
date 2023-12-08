import engBaidu from './eng-baidu';
import engBing from './eng-bing';
import engGoogle from './eng-google';
import engQiuwenbaike from './eng-qiuwenbaike';
import engSogou from './eng-sogou';
import engWikipedia from './eng-wikipedia';

const ENGINES = {
	Baidu: engBaidu,
	Google: engGoogle,
	Bing: engBing,
	Qiuwenbaike: engQiuwenbaike,
	Wikipedia: engWikipedia,
	Sogou: engSogou,
};

function target(eng, wd) {
	return ENGINES[eng].target(wd);
}

function complete(eng, wd, callback) {
	return ENGINES[eng].complete(wd, callback);
}

export default {
	target,
	complete,
};
