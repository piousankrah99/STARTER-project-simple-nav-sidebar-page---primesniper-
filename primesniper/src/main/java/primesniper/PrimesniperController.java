package primesniper;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping(path = "/api/vi/primeSniper/")

public class PrimesniperController {

    @GetMapping(path = "index")
    public String getSniper(){

        return "index";
    }
}
