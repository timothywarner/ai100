# Set secrets
from azureml.core import Experiment, Run
from azureml.core import Workspace
from azureml.core import Keyvault
import os


ws = Workspace.from_config()
my_secret = os.environ.get("MY_SECRET")
keyvault = ws.get_default_keyvault()
keyvault.set_secret(name="mysecret", value=my_secret)


# get secrets
# Code in submitted run

run = Run.get_context()
secret_value = run.get_secret(name="mysecret")
