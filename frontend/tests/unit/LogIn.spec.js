import LogIn from "@/views/LogIn.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

const wrapper = shallowMount(LogIn, {
    stubs: {
        RouterLink: RouterLinkStub,
    },
});

describe("LogIn", () => {
    test("Should check if the path is correct on router link", () => {
        expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/Register");
    });
});