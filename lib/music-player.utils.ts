
declare const soundManager: any;

export class MusicPlayerUtils {

  /**
   *
   * @param track
   * @returns {boolean}
   */
  static IsTrackValid(track: any): boolean {
    if (typeof track === 'undefined') {
      console.warn('invalid track data');
      return false;
    }

    if (track.url.indexOf('soundcloud') > -1) {
      //if soundcloud url
      if(typeof track.url === 'undefined') {
        console.warn('invalid soundcloud track url');
        return false;
      }
    } else {
      if(soundManager.canPlayURL(track.url) !== true) {
        console.warn('invalid song url');
        return false;
      }
    }

    return true;
  }

  /**
   * getIndexByValue used by this service
   * @param {Array<any>} array
   * @param value
   * @returns {any}
   */
  static GetIndexByValue(array: Array<any>, value: any): number {
    for(let i = 0; i < array.length; i++) {
      if(array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  /**
   * To check if value is in array
   * @param {Array<any>} array
   * @param {string} value
   * @returns {number}
   */
  static IsInArray(array: Array<any>, value: string): number {
    for(let i = 0; i < array.length; i++) {
      if(array[i].id === value) {
        return i;
      }
    }
    return -1;
  }

  /**
   * asyncLoop
   * @param o
   */
  static AsyncLoop(o: any): void {
    let i = -1;
    let loop = () => {
      i++;
      if(i === o.length) {
        o.callback();
        return;
      }
      o.functionToLoop(loop, i);
    };
    loop(); //init
  }
}
