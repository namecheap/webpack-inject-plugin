import type { LoaderDefinition } from 'webpack';
import { registry, type Loader } from './main';

type LoaderOptions = {
  id: string;
};

const injectLoader: LoaderDefinition<LoaderOptions> = function (source: string | Buffer) {
  const options = this.getOptions();
  let func: Loader = () => '';
  if (registry[options.id]) {
    func = registry[options.id];
  }

  const rtn: string | Promise<string> = func.call(this, source);

  if (rtn instanceof Promise) {
    const callback = this.async();
    rtn
      .then(result => {
        callback && callback(null, result);
      })
      .catch(err => {
        callback && callback(err, undefined);
      });
    return undefined;
  }

  return rtn;
};

export default injectLoader;
