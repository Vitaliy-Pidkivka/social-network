import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("test ProfileStatus component", () => {
    test("status in props should be correctly", () => {
        const component = create(<ProfileStatus status="test ProfileStatus"/>);
        let instance = component.root;

        expect(instance.props.status).toBe('test ProfileStatus')
    });
});