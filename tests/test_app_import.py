import importlib
import os
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))


class AppImportTest(unittest.TestCase):
    def test_app_module_imports(self):
        module = importlib.import_module("app")
        self.assertIsNotNone(module.app)

    def test_server_config_defaults(self):
        module = importlib.import_module("app")
        with patch.dict(os.environ, {}, clear=False):
            host, port, debug = module.get_server_config()
        self.assertEqual(host, "127.0.0.1")
        self.assertEqual(port, 5000)
        self.assertFalse(debug)


if __name__ == "__main__":
    unittest.main()
