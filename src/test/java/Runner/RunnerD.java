package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		glue = {"StepDefinationPack"},
		
		plugin = {"html:target/PracticeDemo_test_report"},
		
		features = {"Features"},
		
		tags = {"@ninja"}
		
		)

public class RunnerD {

	
}
