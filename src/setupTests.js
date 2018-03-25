/* eslint import/no-extraneous-dependencies: "off" */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {createSerializer} from 'enzyme-to-json'


// setup enzyme to work with React 16
configure({ adapter: new Adapter() })

// setup enzyme as the default serializer
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}))
