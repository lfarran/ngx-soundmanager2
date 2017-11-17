import{ HumanTimePipe } from './human-time.pipe';

export function main() {
    describe('HumanTimePipe', () => {
        let pipe: HumanTimePipe;

        beforeEach(() => {
            pipe = new HumanTimePipe();
        });

        it('returns formatted time', () => {
            expect(pipe.transform(3000)).toEqual('00:03');
            expect(pipe.transform(30000)).toEqual('00:30');
            expect(pipe.transform(33333)).toEqual('00:33');
            expect(pipe.transform(3000000)).toEqual('50:00');
            expect(pipe.transform(0)).toEqual('00:00');
        });
    });
}
