///<reference path='./jasmine.d.ts' />

module Test {
	describe("sample suite", ()=> {
		it("sample spec", () => {
			expect("something").not.toBeNull();
		});
	});
}
