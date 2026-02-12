import {
  createBackend,
  discoveryFeatureLoader,
} from '@backstage/backend-defaults';

const backend = createBackend();

backend.add(discoveryFeatureLoader);

backend.start();
