<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        // return $this->render('default/index.html.twig', [
        // 'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        // ]);

        return $this->render('@App/index.html.twig');
    }

    /**
     * @Route("/test", name="test")
     */
    public function testAction(Request $request)
    {
        // replace this example code with whatever you need
        // return $this->render('default/index.html.twig', [
        // 'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        // ]);

        return $this->render('@App/List/list.html.twig');
    }

    /**
     * @Route("/list", name="list")
     */
    public function listAction(Request $request)
    {
        // replace this example code with whatever you need
        // return $this->render('default/index.html.twig', [
        // 'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        // ]);

        return $this->render('@App/List/list.html.twig');
    }

    /**
     * @Route("/info", name="info")
     */
    public function infoAction(Request $request)
    {
        // replace this example code with whatever you need
        // return $this->render('default/index.html.twig', [
        // 'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        // ]);

        return $this->render('@App/Info/info.html.twig');
    }


}
